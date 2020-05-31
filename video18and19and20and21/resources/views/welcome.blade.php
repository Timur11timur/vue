<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

    </head>
    <body>
        <div id="app">
            <ul>
                <li v-for="skill in skills" v-text="skill"></li>
{{--                or                                        --}}
{{--            <li v-for="skill in skills">@{{ skill }}</li> --}}
            </ul>

        </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://unpkg.com/vue@2.1.6/dist/vue.js"></script>
        <script src="/js/video18.js"></script>
    </body>
</html>
