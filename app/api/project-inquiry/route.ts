import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabaseServer'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      budget,
      projectType,
      message,
    } = body

    // Basic validation
    if (!firstName || !lastName || !email || !projectType || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { error } = await supabaseServer
      .from('project_inquiries')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        company,
        phone,
        budget,
        project_type: projectType,
        message,
      })

    if (error) {
      // Duplicate email (Postgres unique violation)
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'This email has already submitted an inquiry.' },
          { status: 409 }
        )
      }

      console.error('Supabase error:', error)

      return NextResponse.json(
        { message: 'Something went wrong. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Inquiry submitted successfully' },
      { status: 200 }
    )
  } catch (err) {
    console.error('API crash:', err)

    // 🔴 THIS IS THE IMPORTANT PART
    // Ensures we NEVER return HTML
    return NextResponse.json(
      { message: 'Invalid request or server error' },
      { status: 500 }
    )
  }
}
