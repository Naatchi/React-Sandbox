import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = await axios.get('/api/user')

    const user = await res

    if (user) {
        return NextResponse.next()
    }

    return NextResponse.redirect('/auth/login')
}
