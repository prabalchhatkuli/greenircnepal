import CMS from 'decap-cms-app'
import uploadcare from 'decap-cms-media-library-uploadcare'
import cloudinary from 'decap-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// Configure Auth0 authentication if environment variables are available
if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
  // Only initialize Auth0 in production/staging environments
  const auth0Config = {
    domain: process.env.GATSBY_AUTH0_DOMAIN,
    clientId: process.env.GATSBY_AUTH0_CLIENT_ID,
    audience: process.env.GATSBY_AUTH0_AUDIENCE,
    scope: 'openid profile email'
  }
  
  // Only configure if all required environment variables are present
  if (auth0Config.domain && auth0Config.clientId && auth0Config.audience) {
    CMS.registerBackend('auth0', {
      ...auth0Config
    })
  }
}

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
