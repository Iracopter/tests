describe('keypress', ()=> {
    it('Натиск на клавішу та перенесення', ()=> {
      var spy = spyOn(Element.prototype, 'scrollIntoView'); 
      
   
      var event = new KeyboardEvent('keydown', { key: 'a' });
      document.dispatchEvent(event);
  
      var hiddenElement = document.getElementById('a');
      expect(spy).toHaveBeenCalledWith({block: "center", behavior: "smooth"}); 
    });
  });


describe('changesize', function() {
    var image=getElementById('my_photo');
  
    it('should set the image scale to 1.75', function() {

      changesize();
      expect(image.style.transform).toEqual('scale(1.75)');
    });
  });
  
