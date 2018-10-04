export namespace Pager {
	export const CurrentPage = 1;
	export const PageSize = 5;
}

export namespace GlobalUrls {
	export const RootUrl = 'http://GIND04LXB5RF0N2.bdx.com/EM.WebApi';
}

export function getBaseLocation() {
	console.log(location.pathname);
	const paths: string[] = location.pathname.split('/').splice(1, 1);
	console.log(paths);
	const basePath: string = (paths && paths[0]) || 'Angular5CRUD'; // Default: Angular5CRUD
	console.log(basePath);
    return '/' + basePath;
}
