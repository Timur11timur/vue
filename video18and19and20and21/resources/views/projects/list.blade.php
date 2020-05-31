@if (count($projects) > 0)
    <h1>My projects</h1>

    @foreach($projects as $project)
        <h5>{{ $project->name }}</h5>
        <p>{{ $project->description }}</p>
    @endforeach
@endif
