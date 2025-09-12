import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    // Basic health check - you can add more comprehensive checks here
    // For example: database connectivity, external services, etc.

    // Check if build artifacts exist
    const buildManifest = path.join(process.cwd(), '.next', 'build-manifest.json')
    const hasBuildManifest = fs.existsSync(buildManifest)
    
    // Check static files
    const staticDir = path.join(process.cwd(), '.next', 'static')
    const hasStaticDir = fs.existsSync(staticDir)
    
    let staticFilesCount = 0
    if (hasStaticDir) {
      try {
        const files = fs.readdirSync(staticDir, { recursive: true })
        staticFilesCount = files.length
      } catch (e) {
        // Ignore errors counting files
      }
    }

    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.npm_package_version || '1.0.0',
      build: {
        hasBuildManifest,
        hasStaticDir,
        staticFilesCount,
        nodeEnv: process.env.NODE_ENV || 'development'
      }
    }

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  } catch (error) {
    console.error('Health check failed:', error)

    return NextResponse.json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: 'Internal server error'
    }, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  }
}

// Optional: Support HEAD requests for health checks
export async function HEAD(request: NextRequest) {
  return new NextResponse(null, { status: 200 })
}
