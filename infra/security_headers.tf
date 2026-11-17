resource "aws_cloudfront_response_headers_policy" "security" {
  name = "${var.project_name}-security-headers"

  security_headers_config {
    # Force HTTPS for one year.
    strict_transport_security {
      access_control_max_age_sec = 31536000
      include_subdomains         = true
      override                   = true
    }

    # Stop browsers from guessing file types.
    content_type_options {
      override = true
    }

    # Forbid other sites from embedding yours in a frame.
    frame_options {
      frame_option = "DENY"
      override     = true
    }

    # Share only the site name, not the full URL, when visitors click away.
    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }

    # Allow only the content sources your site really uses.
    content_security_policy {
      content_security_policy = "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self' https://formspree.io; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
      override                = true
    }
  }
}