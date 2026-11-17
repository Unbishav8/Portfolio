# Developer Portfolio & Cloud Infrastructure

A modern, responsive developer portfolio built with **React 19** and **Vite**, deployed to **AWS (S3 + CloudFront)** using **Terraform (Infrastructure as Code)**.

---

## 🏗️ Architecture

```
                       ┌──────────────────────┐
                       │   End Users / Web    │
                       └──────────┬───────────┘
                                  │ HTTPS
                                  ▼
                     ┌─────────────────────────┐
                     │  AWS CloudFront (CDN)   │
                     │  - Global Edge Caching  │
                     │  - HTTPS / SSL Support  │
                     │  - SPA Routing Fallback │
                     └────────────┬────────────┘
                                  │ OAC (Origin Access Control)
                                  ▼
                     ┌─────────────────────────┐
                     │     AWS S3 Bucket       │
                     │  - Private Static Host  │
                     │  - React Production SPA │
                     └─────────────────────────┘
```

---

## 📁 Project Structure

```text
react-terraform/
├── app/                        # React Frontend Application
│   ├── public/                 # Static assets & icons
│   ├── src/
│   │   ├── assets/             # Images and SVG assets
│   │   ├── components/         # React components (Navbar, Hero, About, Projects, Contact)
│   │   ├── data/               # Dynamic profile and project data
│   │   ├── App.jsx             # Main application layout
│   │   ├── index.css           # Global theme & responsive styles
│   │   └── main.jsx            # Application entrypoint
│   ├── package.json            # Scripts & dependencies
│   └── vite.config.js          # Vite build configuration
│
├── infra/                      # Terraform Infrastructure (AWS)
│   ├── bucket.tf               # S3 Bucket IAM policy for CloudFront access
│   ├── cloudfront.tf           # CloudFront CDN distribution & OAC setup
│   ├── main.tf                 # Caller identity & core provider references
│   ├── output.tf               # Outputs (Bucket Name, Distribution ID, Site URL)
│   ├── s3.tf                   # Private S3 bucket & public access blocks
│   ├── variables.tf            # Configurable variables (region, project name)
│   └── versions.tf             # Required Terraform & AWS provider versions
│
└── README.md                   # Project documentation
```

---

## ⚡ Tech Stack

- **Frontend:** React 19, Vite, Lucide Icons, Modern CSS3 (CSS Grid, Flexbox, Custom Properties)
- **Infrastructure as Code:** Terraform
- **Cloud Provider:** Amazon Web Services (AWS)
  - **Storage:** Amazon S3 (Fully private bucket)
  - **Content Delivery:** Amazon CloudFront (CDN with Origin Access Control)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [Terraform](https://www.terraform.io/) (v1.0 or newer)
- [AWS CLI](https://aws.amazon.com/cli/) configured with proper IAM credentials (`aws configure`)

---

### 1. Local Frontend Development

1. Navigate to the `app` directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The compiled output will be generated in `app/dist/`.

---

### 2. Infrastructure Deployment (Terraform)

1. Navigate to the `infra` directory:
   ```bash
   cd infra
   ```

2. Initialize Terraform providers:
   ```bash
   terraform init
   ```

3. Preview infrastructure changes:
   ```bash
   terraform plan
   ```

4. Deploy resources to AWS:
   ```bash
   terraform apply
   ```

5. Note down the outputs from Terraform:
   - `bucket_name`
   - `distribution_id`
   - `site_url`

---

### 3. Deploying the Frontend to AWS

Once the infrastructure is created and the frontend is built:

1. Sync the build directory to the private S3 bucket:
   ```bash
   aws s3 sync ../app/dist s3://<bucket_name> --delete
   ```

2. Invalidate the CloudFront cache so changes reflect globally immediately:
   ```bash
   aws cloudfront create-invalidation --distribution-id <distribution_id> --paths "/*"
   ```

3. Visit your live site at the `site_url` output provided by Terraform.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
