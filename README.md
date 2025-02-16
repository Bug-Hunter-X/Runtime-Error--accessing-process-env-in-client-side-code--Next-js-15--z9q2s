# Runtime Error: Accessing process.env in Client-Side Code (Next.js 15)

This repository demonstrates a common runtime error encountered in Next.js 15 applications when attempting to access environment variables within client-side code.  The `process` object, which contains environment variables on the server, is not available in the browser environment.  This example shows how to reproduce the error and provides a solution.

## Reproducing the Error

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. Observe the runtime error in your browser's console.

## Solution

The solution is to avoid accessing `process.env` directly in client-side code.  Instead, pass the required environment variables as props to your client-side components from your page component using `getServerSideProps` or similar.