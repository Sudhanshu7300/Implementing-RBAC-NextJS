import { Typography } from "@mui/material";
import PageContainer from "../components/container/PageContainer";
export default async function Home() {
  return (
    <>
      <PageContainer title="Dashboard" description="Dashboard page">
        <Typography color="primary" variant="h6">
          You intentionally cannot access the raw request object. However, you
          can access headers and cookies through server-only functions. You can
          also set cookies.
        </Typography>
        <Typography color="primary" variant="h6">
          Layouts do not rerender. They can be cached and reused to avoid
          unnecessary computation when navigating between pages. By restricting
          layouts from accessing the raw request, Next.js can, prevent the
          execution of potentially slow or expensive user code within the
          layout, which could negatively impact performance.
        </Typography>
        <Typography color="primary" variant="h6">
          This design also enforces consistent and predictable behavior for
          layouts across different pages, which simplifies development and
          debugging.
        </Typography>
        <Typography color="primary" variant="h6">
          Depending on the UI pattern you're building, Parallel Routes allow you
          to render multiple pages in the same layout, and pages have access to
          the route segments as well as the URL search params.
        </Typography>
        <Typography color="primary" variant="h6">
          The cookies function allows you to read the HTTP incoming request
          cookies from a Server Component or write outgoing request cookies in a
          Server Action or Route Handler.
        </Typography>
        <Typography color="primary" variant="h6">
          Fetching Data on the Server with fetch Next.js extends the native
          fetch Web API to allow you to configure the caching and revalidating
          behavior for each fetch request on the server. React extends fetch to
          automatically memoize fetch requests while rendering a React component
          tree.
        </Typography>
        <Typography color="primary" variant="h6">
          Caching Data Caching stores data so it doesn't need to be re-fetched
          from your data source on every request.
        </Typography>
      </PageContainer>
    </>
  );
}
