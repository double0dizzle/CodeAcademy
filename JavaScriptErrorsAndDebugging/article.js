// Learning to code can be a frustrating endeavor because you are destined to encounter many red errors along the way. What makes a programmer successful isn't avoiding errors—no programmer can avoid them. Great programmers understand that errors are part of the process, and they know how to find the solution to each while learning something new from them. In this article, we'll teach you how to think about errors in your code a little differently.

// Red is a beautiful color
// We're conditioned by society to be afraid of the color red. STOP, DANGER, DO NOT ENTER, all loud red signs telling us to turn around, don't go in there, you'll get hurt. It's so easy to carry this mindset over to coding that many new programmers get discouraged and distraught over the red error messages their compilers spit out.

// They think, "oh no, I've done something wrong again" and "clearly coding isn't for me, even the computer knows," but that's the wrong way of thinking! Every programmer, even the most experienced ones, encounter errors all the time. In fact, believe it or not, experienced programmers likely encounter far more errors than a new programmer ever will.

// Errors in your code mean you're trying to do something cool
// Consider the totally made up graph below:

// errors in code and complexity

// As your code increases in complexity, the number of errors you'll encounter rises at a similar rate. An error means you're trying to do something that might be a little complicated (or very complicated), and it doesn't quite work yet, but by no means is it a sign that you should stop trying!

// In fact, there are entire engineering roles built around finding and fixing errors. A site reliability engineer finds and report errors in web platforms. A test engineer builds automated tests to discover errors in software and make sure that it meets a companies standards.

// Almost all major technology companies offer cash rewards to intrepid programmers who can find bugs in their software. Google, Amazon, and Microsoft all encourage users to seek out bugs and report any they might find.

// Why do they do this? Why would a major technology company want its users to try to break their software? Because they understand that encountering bugs is one of the best ways you can improve your code. Bugs show you where the weaknesses are, make you really consider what you want your code to accomplish, and then guide you towards building more reliable and secure products.

// Tools to tackle code errors
// "Okay okay okay I get it, I shouldn't be scared of my error messages, but just changing how I feel doesn't help me get past this error message right in front of me! What should I do!"

// You're right, imaginary person in my head, celebrating an error isn't going to make that error go away. You have to be able to bust through the error to really start improving. Let's outline a couple of steps to take to solve any compiler errors—errors that print out to the console as you code—that you might encounter.

// The following steps will guide you through a standard error that might get thrown your way as you learn to code, and they'll show you that errors aren't as scary as they seem. In fact, the steps are mostly a combination of reading the error carefully or copy pasting it in a Google search!

// 1. Dissect the error.
// When an error first appears on your screen, find the line in the error specific to your code. Lot's of error messages have tons of boilerplate details that aren’t important to the actual error. You want to find that part in the error that gives you insight as to what happened.

// I ran into an error recently when I was trying to create a program that could store a list of grades for a bunch of classes a fictional student might be taking. I had a list of classes and a list of grades, and I wanted to combine them into list of (class, grade) pairs that I could add and remove classes and grades from.

// When I ran my code, I encountered the following error:

// original error message

// Which line do we care about? Well, the first three are all just talking about where the error occurred, not what the error was. But the fourth line:

// actual error message

// That's our error message! This is what went wrong. We may not know exactly what it means yet, but we're on the path to finding out! We know that we used a zip object in our code, so that could be a great place to start.

// 2. Ask yourself, is the solution in the error?
// Often, you'll encounter syntax errors that will show exactly where the error occurred and what the error was. When you get these types of errors, you can go directly back to your code and fix them. Here's an example of a syntax error:

// syntax error message

// Here I forgot to include a : at the end of my for statement. Notice that in this case, the compiler often points to exactly where the error occured with the ^ symbol, making it easier to fix.

// 3. Search for other people who have encountered this error.
// Often, step two will not apply, and you'll have to dive a little deeper into the error. Let's return to the gradebook error I encountered in step one. Since the solution isn't immediately obvious, I'm going to have to do a bit of searching online.

// Copy and paste the important part of the error message into a search engine and look through several pages if necessary until you find someone else who has also run into that issue. Google is always a good place to check, but another excellent resource to search through is Stack Overflow, which is a wonderful community of programmers sharing knowledge and building cool stuff.

// I want to solve the error AttributeError: 'zip' object has no attribute to 'append', so I will Google that line and see what comes up. The first result I find isn't super related, but that's okay!

// 4. Compare their use case to yours.
// Often you will not find someone who was trying to do the exact same thing you were trying to do, but who still encountered the same error. Read through their code a bit and see if it is comparable to yours.

// Even if their code is wildly different, the one or two lines that threw the error might be very similar to your code, so the solution may end up being the same.

// Consider my AttributeError. I found a result that didn't seem related at all, but scrolling down to the third response I see:

// comment solving an error on github

// Hmm, I'm running Python 3, and all he had to do to fix his code was change images = zip(bufferArray[:,0]) to images = list(zip(bufferArray[:,0])). It's worth a shot!

// 5. Try to implement the solution.
// Tweak the code a bit to match your use case and give it a shot! Worst case is that the error doesn't go away and then you can try again. Best case is that it's fixed and you've learned what was causing your error!

// Every solution you implement is a new tool you can add to your programmer’s toolbox, and another error you will know how to solve in the future.

// Thankfully, thortom's solution was able to solve my issues with the .zip() object. All I had to do was convert it into a list.

// gif showing a resolved error

// In the process of figuring out this compiler error, I learned that zip() doesn't return a list, it returns an iterator. I also learned that this is a new feature of Python 3 that didn't exist with Python 2.7. See, every error is an opportunity to learn!

// 6. If it doesn't work, repeat steps 2-4.
// Keep searching through Google and Stack Overflow. The answer will be there! Sometimes it's helpful to Google parts of the error message, not the entire line. Consider the AttributeError. If I Googled just ".zip() object," I would learn a lot of the same information that I got from Googling the full error.

// The solutions to your errors are out there, and the process of finding them will make you a stronger and more confident programmer. As you grow and learn, expect to encounter countless errors, and expect each one to be its own unique learning opportunity.