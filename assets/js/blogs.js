$.get( "https://www.googleapis.com/blogger/v3/blogs/4579833658815836489/posts?key=AIzaSyArG5DMTQFjfvtR7WSgYDYw4oQw4FiLRWs", function( data ) {
    console.log(data.items);
    var result = data.items;
    createBlogPosts(i,result[0].title,result[0].author.displayName,result[0].url,true);
    for(var i=1;i<result.length;i++){
          createBlogPosts(i,result[i].title,result[i].author.displayName,result[i].url,false);
    }
  });

function createBlogPosts(number,blogcontent,blogauthor,blogurl,activestatus){
  var carouselinner = document.getElementsByClassName("carousel-inner")[0];

  var itemactive = document.createElement('div');
  itemactive.id = number;
  if(activestatus === true)  itemactive.className = 'item active';
  else itemactive.className = 'item';

  var blockquote = document.createElement('blockquote');
  blockquote.className = 'quote';
    var i = document.createElement("i");
    i.className = 'fa fa-quote-left'
    var para = document.createElement("P");
    var t = document.createTextNode(blogcontent);
    para.appendChild(t);
    blockquote.appendChild(i);
    blockquote.appendChild(para);

  var blogsource = document.createElement('div');
  blogsource.className = 'source';
    var nam = document.createElement("div");
    nam.innerHTML = 'createdBy ' + blogauthor
    nam.className = 'name'
    var position = document.createElement("div");
    position.className = 'position'
    var atag = document.createElement("a");
    atag.className = 'fa fa-link'
    atag.href = blogurl;
    atag.innerHTML = '   '+blogurl;
    position.appendChild(atag);
    blogsource.appendChild(nam);
    blogsource.appendChild(position);

  itemactive.appendChild(blockquote);
  itemactive.appendChild(blogsource);
  carouselinner.appendChild(itemactive);
}
