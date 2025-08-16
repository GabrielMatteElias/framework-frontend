const isArchitectProfile = (pathname) => {
    const profileRegex = /^\/architect\/(?!search$)[^\/]+$/;
    return profileRegex.test(pathname);
}

export {
    isArchitectProfile,
}