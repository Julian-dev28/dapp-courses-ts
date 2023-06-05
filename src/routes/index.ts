import { getProgress } from './getProgress';
import { updateProgress } from './updateProgress';

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === "/getProgress") {
    return getProgress(request);
  } else if (url.pathname === "/updateProgress") {
    return updateProgress(request);
  }

  return new Response("Not found", { status: 404 });
}
