import { Router, error, cors, ResponseHandler } from "itty-router";

const logger: ResponseHandler = (response, request) => {
  console.log(
    response.status,
    request.url,
    'at',
    new Date().toLocaleString(),
  )
}

const router = Router({
  catch: error,
  finally: [logger]
});

router
  .get("/", () => new Response("anilist.me/:username or intp.moe/:username"))
  .get("/:username", (request) =>
    Response.redirect(
      `https://anilist.co/user/${request.params.username}/`,
      301,
    ),
  )
  .all("*", () => error(404));

export default router;
