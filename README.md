#Setup

###Bundler
[![Bundler](http://www.fastly.com/img/open_source/gembundler.png)](http://bundler.io/)

Install [Bundler](http://bundler.io/)  
`$ gem install bundler`  

Bundler provides a consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed.   

Bundler will install **sass v3.3** or greater and **scss-lint v0.31.0** or greater  
  
---

###Bower  
![Bower](http://public2.bemyapp.com/media//wp-content/uploads/2014/04/bower_logo.png "Bower")  
Install [Bower](http://bower.io/)  
`$ npm install -g bower`  
  
Bower is a package manager for the web. It works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for.

*Bower requires [Node and npm](http://nodejs.org/) and [Git](http://git-scm.org/)

All jquery plugins needed for development will install through bower. If it can't be found in bower then add it in under `libs` folder in `assets`.
  
Search bower packages here: <http://bower.io/search/>
  
  
After installing **Bundler** and **Bower**, please download the latest web Starter Kit in bitbucket:
<https://bitbucket.org/richmediateam/xm-web-starter-kit/downloads> please run the following command in terminal:  

```
$ bower install
$ bundle install  
$ npm install
```


[![forthebadge](http://forthebadge.com/badges/built-with-love.svg)](http://forthebadge.com)
