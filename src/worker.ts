import { Router, error } from 'itty-router';

const router = Router();

router
	.get('/', () => new Response('intp.moe/:username'))
	.get('/:username', (request) => Response.redirect(`https://anilist.co/user/${request.params.username}/`, 301))
	.all('*', () => error(404));

export default {
	fetch: (request: Request) => router.handle(request).catch(error),
};
