$(document).ready(function(){
    // page.init();
  // });

  // init: function () {
  //    page.initStyling();
  //    page.initEvents();
  //  },

  //  initStyling: function () {
  // })

    //  },
     //
    //  initEvents: function () {
     //
     //
     //
     //
     //
     //
     //
     //
     //
    //  },

var refineProData = _.map(profileObject.data, function(el) {

  return {
    avatar_url: el.avatar_url,
    name: el.name,
    organizations_url: el.organizations_url,
    followers: el.followers,
    following: el.following
  }

});

var profTmpl = _.template($('#redditTmpl').html());

_.each(refinedReddit, function (el) {
  // console.log(redditTmpl(el));
  $('.reddits').append(redditTmpl(el));
});
console.log(refineProData);





});
