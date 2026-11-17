# S3 bucket names are global across all of AWS, so add a random suffix.
resource "random_id" "suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "site" {
  bucket = "${var.project_name}-${random_id.suffix.hex}"
}

# Keep the bucket fully private. Only CloudFront will be allowed in later.
resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}