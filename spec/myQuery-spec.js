$(function(){
  describe('myQuery', function() {
    beforeEach(function() {
      setFixtures('<html><head>'
        + '<script type="text/javascript" src="lib/myQuery.js"></script>'
        + '<title>This is a website!</title></head><body>'
        + '<h1>I\'m a header!</h1>'
        + '<div class="blue">I\'m a div with the class blue</div>'
        + '<div class="pink">I\'m a div with the class pink</div>'
        + '<div class="blue">I\'m a div with the class blue</div>'
        + '<div class="pink">I\'m a div with the class pink</div>'
        + '<p><p id="red">I\'m a paragraph with the id red </p>'
        + '<p id="green"> I\'m a paragraph with the id green </p>'
        + '<p id="large-font" class="blue"> I\'m a paragraph with the id'
        + 'large-font and the class blue!</p></p></body></html>'
      );
    });

    it('should be able to select elements by tag', function() {
      var selectedElArr = myQuery('div').element;
      expect(selectedElArr).toEqual(document.getElementsByTagName('div'));
    });

    it('should be able to select elements by class', function() {
      var selectedElArr = myQuery('.blue').element;
      expect(selectedElArr).toEqual(document.getElementsByClassName('blue'));
    });

    it('should be able to select elements by id', function() {
      var selectedElArr = myQuery('#large-font').element;
      expect(selectedElArr).toEqual(document.getElementById('large-font'));
    });

    it('should be able to change all selected elements with #css', function() {
      var selectedElArr;
      myQuery('.pink').css('color', 'pink');
      selectedElArr = document.getElementsByClassName('pink');
      expect(selectedElArr[0].style.color).toEqual('rgb(255, 192, 203)');
      expect(selectedElArr[1].style.color).toEqual('rgb(255, 192, 203)');
    });

    it('should remove all selected elements with #remove', function() {
      var selectedElArr;
      myQuery('.pink').remove();
      selectedElArr = document.getElementsByClassName('pink');
      expect(selectedElArr.length).toEqual(0);
    });

    it('should append an element to all selected elements with #append', function() {
      var selectedElArr;
      myQuery('.pink').append('<span>Hello</span>');
      selectedElArr = document.getElementsByClassName('pink');
      expect(selectedElArr[0].lastChild.outerHTML).toEqual('<span>Hello</span>');
      expect(selectedElArr[1].lastChild.outerHTML).toEqual('<span>Hello</span>');
    });
  });
});
