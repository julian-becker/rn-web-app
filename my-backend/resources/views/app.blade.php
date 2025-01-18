<!DOCTYPE html>
<html lang="en">
<head>
    <title>My new App</title>
    @viteReactRefresh
    @vite('src/index.tsx')
</head>
<body>
    <div id="app" data-page="{{ json_encode($page) }}"></div>
</body>
</html>
