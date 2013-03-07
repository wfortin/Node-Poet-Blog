{{{
    "title"    : "Hello world",
    "tags"     : [ "node", "blog", "poet", "heroku" ],
    "category" : "node",
    "date"     : "3-6-2013"
}}}

This is my first post, in my first blog. I've been wanting to do this for a long time. This blog will primarly be about programming and technology. I will try to leave the most information on Node.js, Heroku, CSS, UX/UI, JavaScript, Linux, Web Development or any cool stuff that I run into and find interesting to experiment with.

Let's start right with this blog... I could have done it on wordpress or drupal but since i got into Node I don't really want to go back to PHP programming. I found an interessting Node package for blogging easily : Poet. I've set up a running server on heroku and was done in about an hour.

Here's how I set up my blog.<!--more-->

First follow the [tutorial from the maker of poet](http://jsantell.com/post/getting-started-with-poet).

We now want to host our blog on Heroku (for free!) so that other people can read it. There are little modifications to make. Here it goes :

First, you need the set the <code>engines</code> in the <code>package.json</code> file.

Your <code>package.json</code> should now look like this :
<pre>
{
  "name": "NameOfMyProject",
  "version": "0.0.1",
  "engines": ["node >= 0.6.12"],
  "private" : true,
  "main": "server.js",
  "dependencies":
  {
    "poet"    : ">= 0.1.6",
    "jade"    : ">= 0.20.3",
    "express" : ">= 3.0.0rc5"
  },
  "engines":
  {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
}
</pre>

Next, you can't use a hardcoded port on Heroku. Heroku will give you an open port when running your application. You will need to change your <code>server.js</code> file.
Look for the line
<pre>
app.listen( 3000 );
</pre>
And change it to 
<pre>
app.listen( process.env.PORT || 3000 );
</pre>

Next, you need to specify to Heroku wich process to run. Since we want to run <code>server.js</code> on a web dyno, we'll add a file named <code>Procfile</code> and add the following command inside.
<pre>
web: node server.js
</pre>

Once these changes are made, we are ready to create our heroku app using the following commands :

<pre>
$ cd myappdirectory
$ git init
$ git commit -m "First commit. Deploying on Heroku"
</pre>

<pre>
$ heroku create
</pre>
This will create your app with a randomly generated name (Don't worry, you can change that in the settings).

<pre>
$ git push heroku master
</pre>

That's it you now have a fully working blog running on Node.js and hosted on Heroku. If something went wrong refer to the [Poet Documentation](http://jsantell.github.com/poet/) or the [Poet GitHub Repo](https://github.com/jsantell/poet) and also the [Heroku Developer Center documentation](https://devcenter.heroku.com/) for Node.js