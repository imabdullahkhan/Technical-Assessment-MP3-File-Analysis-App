Technical Assessment: MP3 File
Analysis App

Objective
The aim of this task is to create an API endpoint according to the specification below
that accepts an MP3 file and responds with the number of frames in the file. A sample
file is provided for candidates to test their solution against.
This assessment will test the candidate's ability to:
Learn & apply new knowledge in a likely unfamiliar context
Demonstrate technical competency in Typescript
Show personal coding styles & preferences
API Specification
The application must host an endpoint at /file-upload that accepts an MP3 file
upload via the POST method.
The endpoint must successfully count the number of frames for MPEG Version 1
Audio Layer 3 files (This is almost universally the format for .mp3 files, including
the provided sample).

⚠️ Handling of other MPEG file formats should be considered out of scope for
this exercise & candidates are encouraged not to spend time on this.

The endpoint must provide a JSON response (with the correct response headers)
in the following format:

Technical Assessment: MP3 File Analysis App 2

{
"frameCount": <number>
}

Requirements
The candidate:
Must use TypeScript to complete the exercise.
Must parse the MP3 file to logically count the number of frames in the file.
Must not use an NPM package to parse the MP3 frame data directly. NPM
packages may be used for other things such as generic utilities or a http framework.
Must respond to the client with the correct number of frames found in the file, in the
format specified above.