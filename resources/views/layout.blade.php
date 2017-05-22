<!doctype html>
<html lang="en">
    <head>
        <base href="/">
        <meta charset="UTF-8">
        <title>Todo</title>
        <script type="application/javascript" src="{{ elixir('js/env.js') }}"></script>
        <script type="application/javascript" src="{{ elixir('js/all.js') }}"></script>
        <link rel="stylesheet" href="{{ elixir('css/app.css') }}"/>
        <link rel="stylesheet" href="{{ elixir('css/all.css') }}"/>
    </head>
    <body ng-app="todoApp" ng-controller="MainController">
        <div class="container">
            <div ng-view>
            </div>
        </div>
    </body>
</html>
