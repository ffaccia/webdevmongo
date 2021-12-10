this course come from Web Dev Simplified youtube channel: https://www.youtube.com/watch?v=qj2oDkvc4dQ

#authentication token 
vscode://vscode.github-authentication/did-authenticate?windowid=1&code=a29cef3fd531325bc8f2&state=6cfa602b-7fd1-4526-81ff-e49e7333f7ed 

mongodb+srv://user:Um4SaJFAe9HjSsq@cluster0.a9nj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongodb+srv://user:<password>@cluster0.a9nj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


#good tutorial for storing uploaded files. mongodb, nodejs and multer
https://www.section.io/engineering-education/uploading-files-using-multer-nodejs/



https://www.youtube.com/watch?v=esy4nRuShl8

curl \
  -F "userid=1" \
  -F "filecomment=This is an image file" \
  -F "image=@/home/user1/Desktop/test.jpg" \
  localhost/uploader.php


curl post a file 
  curl \
  -F "file=@referto.pdf;filename=refe.pdf;type=application/pdf" \
  127.0.0.1:5000/simple_upload


curl post form
curl -d "name=Rafael%20Sagula&phone=3320780" http://www.where.com/guest.cgi



While -d uses the application/x-www-form-urlencoded mime-type, 
generally understood by CGI's and similar, curl also supports the more
 capable multipart/form-data type. This latter type supports things like file upload.

curl -F "coolfiles=@fil1.gif;type=image/gif,fil2.txt,fil3.html"
  http://www.post.com/postit.cgi


  curl \
  -F "file=@JAB ME IF YOU CAN - Loza Alexander-7vm8kLd6PMo.mp4;filename=loza.mp4;type=application/mp4" \
  127.0.0.1:5000/simple_upload


two file at the same time it's not working
  curl \
  -F "file=@JAB ME IF YOU CAN - Loza Alexander-7vm8kLd6PMo.mp4;filename=loza.mp4;type=application/mp4,referto.pdf;filename=refe.pdf;type=application/pdf" \
  127.0.0.1:5000/simple_upload



'JAB ME IF YOU CAN - Loza Alexander-7vm8kLd6PMo.mp4'

.zip application/zip
.mp4 video/mp4



let d = document, [inputs, button] = [
    d.querySelectorAll('input[type="text"], input[type="date"], input[type="file"], input[type="textarea"], input[type="number"], select'),
    d.querySelector('#submit_button')
]

