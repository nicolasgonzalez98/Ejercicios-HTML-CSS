//Menu

itemList = document.querySelectorAll('.slide li');
prev = document.querySelector('.botonera .prev')
next = document.querySelector('.botonera .next')

prev.addEventListener( 'click' , () => changeItem( itemList, false)	)
next.addEventListener( 'click' , () => changeItem( itemList, true) )

	function changeItem (itemList, dir){
		for(i = 0; i < itemList.length ; i ++){
			if( itemList[i].classList.contains('active')){
				itemList[i].classList.remove('active')
				switch(dir){
				case true:
				i < itemList.length - 1 ? 
					nextItem = itemList[i + 1]:
					nextItem = itemList[0]
				break;
				case false:
				i > 0 ? 
					nextItem = itemList[i - 1]:
					nextItem = itemList[itemList.length - 1]
				break;
	}	}	}	
		nextItem.classList.add('active');
	}