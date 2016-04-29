walk(document.body);

function getRegExp(){
	var arrCandidates = [ 
	  "Donald Trump",
	  "Donald J. Trump",
	  "Donald John Trump",
	  "Trump",
	  "Hillary Clinton",
	  "Hillary Rodham Clinton",
	  "Hillary Diane Rodham Clinton",
	  "Hillary",
	  "Clintons",
	  "Clinton",
	  "Bernie Sanders",
	  "Bernard Sanders",
	  "Bernard \"Bernie\" Sanders",
	  "John Richard Kasich",
	  "John Kasich",
	  "Kasich",
	  "Sanders",
	  "Bernie",
	  "Ted Cruz",
	  "Cruz"
	];
	 
	var strCandidates = arrCandidates.join('|');

	return new RegExp(strCandidates,"gi");
}

function getNewString(){
	return "Chris & Alex";
}

function walk(node) 
{
	var child, next;
	
	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode, regEx, newString) 
{
	var v = textNode.nodeValue;

	v = v.replace(getRegExp(), getNewString());
	
	textNode.nodeValue = v;
}
