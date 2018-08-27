$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('contains defined url feeds', function() {
          for (let feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).toBeGreaterThan(0);
          }
        });

         it('has defined name', function () {
           for (let feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).toBeGreaterThan(0);
           }
         });

    });


    describe('The menu', function() {
      const body = document.querySelector('body');
      const menu = document.querySelector('.menu-icon-link');


         it('hidden by default', function() {
           expect(body.classList.contains('menu-hidden')).toBe(true);
         });


          it('changes visibility on click', function() {
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
          });

    });


    describe('Initial Entries', function() {

         beforeEach(function(done) {
           loadFeed(0, done);
         });

         it('completes work', function() {
           const feed = document.querySelector('.feed .entry');
           expect(feed.length).toBeGreaterThan(0);
         });

    });

    describe('New Feed Selection', function() {
      let oldFeed, newFeed;


         beforeEach(function(done) {
           loadFeed(0, function() {
               oldFeed = $('.feed').html();
               loadFeed(1, function () {
                 newFeed = $('.feed').html();
                done();
           });
         });
         });

         it('content changes', function() {
              expect(newFeed).not.toEqual(oldFeed);
         });


    });

}());
