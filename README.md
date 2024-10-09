## Title: FinanceFlow

## <a name="description">Description</a>
This project aims to address these shortcomings by developing a robust and innovative centralized banking system with customized  finance management platform that integrates seamlessly with online banking functionalities. This platform will empower users to consolidate multiple financial accounts into a single, secure interface, gain real-time insights into spending habits, budgeting, and investment performance, set and track financial goals effectively, access personalized financial advice and recommendations, and conduct  secure online transactions with ease.

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>


Watch the video 👇

<a href="https://drive.google.com/file/d/1HA7-jhe63TA3GfF30_cFwk-2S4BZQOIh/view">
    <img src="https://drive.google.com/uc?export=view&id=157XnzredVHGA71wu9-cSrrs5rYgjCpOf" width="320" height="240" />
</a>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#description)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Setup .env variables](#snippet)
6. ❄️ [Deployment](#deployment)
7. 🦉[Work Demonstration](#work-demonstration)

##  <a name="work-demonstration"> 🦉Work Demonstration </a>
<img src="https://drive.google.com/uc?export=view&id=157XnzredVHGA71wu9-cSrrs5rYgjCpOf" width="320" height="240" />
<img src="https://drive.google.com/uc?export=view&id=1J_WliuuvXLwQE5IVhZ_IiJB4XzijEinV" width="320" height="240" />
<img src="https://drive.google.com/uc?export=view&id=1ZHD4zfsTWE6EMbxKQS9bHCx0BwI8khj5" width="320" height="240" />

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## <a name="features">🔋 Features</a>

👉 **Authentication**: An ultra-secure SSR authentication with proper validations and authorization

👉 **Connect Banks**: Integrates with Plaid for multiple bank account linking

👉 **Transaction History**: Includes pagination and filtering options for viewing transaction history of different banks

👉 **Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.

👉 **Funds Transfer**: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.

👉 **Responsiveness**: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

and many more, including code architecture and reusability. 


## <a name="quick-start">🤸 Getting Started </a>

1. **Clone the repository:**
   ```
   git clone [invalid URL removed]
   ```
2. **Install all dependcies**
    ```
    cd your-project
    npm install
    npm run dev
    # or
   yarn dev
    ```
3. **plugins installation**
     ```
      shadcn ui@latest
      sentry installation: https://docs.sentry.io/cli/installation/
      plaid installation
      dwolla plugins
     ```
 4. Open [http://localhost:3000](http://localhost:3000) with your  browser to see the result.

## Prerequisites:

   Make sure you have the following installed on your machine:

   - [Git](https://git-scm.com/)
   - [Node.js](https://nodejs.org/en)
   - [npm](https://www.npmjs.com/) (Node Package Manager)

 ## <a name="snippet"> Setup Environment Variable</a>
Create a new file named `.env` in the root of your project and add the following content:
```
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```
Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/docs/tooling/command-line/installation), [Plaid]( https://plaid.com/docs/quickstart/) and [Dwolla](https://www.dwolla.com/)

## Contribution Guidelines: 
Guidelines for contributing to the project.
**Reporting Issues:**
Search for existing issues: Before creating a new issue, search the issue tracker to see if the problem has already been reported.
Provide clear and concise information: When creating a new issue, please include as much detail as possible, such as:
Clear description of the problem
Steps to reproduce the issue
Expected behavior
Actual behavior
Screenshots or logs (if applicable)
Use issue templates: If available, use the provided issue templates to structure your report.

**Submitting Pull Requests:**
Fork the repository: Create a fork of the project on your GitHub account.
Create a new branch: Create a new branch based on the main branch or a feature branch.
Make changes: Implement your changes and commit them with clear commit messages.
Push changes to your fork: Push your changes to your forked repository.
Open a Pull Request: Create a pull request from your branch to the main repository.
Provide details: Clearly describe the changes you've made and the benefits they bring.
Address code review feedback: Be open to feedback and make necessary changes.

**Testing:**
Write unit tests for any new features or bug fixes.
Ensure existing tests  pass after your changes.

## License
Issued : Copyright (c) 2024 Deep Raj 

## Memes: 
<img src="https://i.gifer.com/origin/ea/ea04580a05ae61739fefe6b70f17a4c3.gif" width="256" height="256"/>
<img src="https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2018/06/type-happy-dog-motivate.gif?fit=309%2C233&ssl=1" width="256" height="256"/>
<img src="https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2018/06/pitch-baseball-explode-nichijou.gif?resize=500%2C281&ssl=1" width="256" height="256"/>

## <a name="deployment">❄️ Deployment</a> 
![Vercel Deploy](finance-flow-beige.vercel.app) 

