terraform {
  required_version = ">= 1.10"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }

  backend "s3" {
    bucket = "tfstate-241304351498-ap-south-1"
    key    = "portfolio/terraform.tfstate"
    region = "ap-south-1"
    encrypt = true
    use_lockfile = true

  }
}

provider "aws" {
  region = var.aws_region
}

