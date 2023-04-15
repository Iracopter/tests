describe('keypress', ()=> {
    it('Натиск на клавішу та перенесення', ()=> {
      var spy = spyOn(Element.prototype, 'scrollIntoView'); 
      
   
      var event = new KeyboardEvent('keydown', { key: 'a' });
      document.dispatchEvent(event);
  
      var hiddenElement = document.getElementById('a');
      expect(spy).toHaveBeenCalledWith({block: "center", behavior: "smooth"}); 
    });
  });
