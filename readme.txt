this course come from Web Dev Simplified youtube channel: https://www.youtube.com/watch?v=qj2oDkvc4dQ

#authentication token 
vscode://vscode.github-authentication/did-authenticate?windowid=1&code=a29cef3fd531325bc8f2&state=6cfa602b-7fd1-4526-81ff-e49e7333f7ed 

mongodb+srv://user:SQYGvYUFNhzw3SzA@cluster0.a9nj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongodb+srv://user:<password>@cluster0.a9nj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

new password: SQYGvYUFNhzw3SzA

#good tutorial for storing uploaded files. mongodb, nodejs and multer
https://www.section.io/engineering-education/uploading-files-using-multer-nodejs/

https://stackabuse.com/get-http-post-body-in-express-js/



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


curl post form
curl -d "name=Rafael%20Sagula&phone=3320780" localhost:8080


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


  curl \
  -F "file=@dummy-image.jpeg;filename=dummy-image.jpeg;type=image/jpeg" \
  https://httpbin.org/post


'JAB ME IF YOU CAN - Loza Alexander-7vm8kLd6PMo.mp4'

.zip application/zip
.mp4 video/mp4



let d = document, [inputs, button] = [
    d.querySelectorAll('input[type="text"], input[type="date"], input[type="file"], input[type="textarea"], input[type="number"], select'),
    d.querySelector('#submit_button')
]


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/');
    },
    fileFilter: function (req, file, cb) {
        const extension = path.extname(file.originalname).toLowerCase();
        const mimetyp = file.mimetype;
        if (
            extension !== '.jpg' ||
            extension !== '.jpeg' ||
            extension !== '.png' ||
            mimetyp !== 'image/png' ||
            mimetyp !== 'image/jpg' ||
            mimetyp !== 'image/jpeg'
        ) {
            cb('error message', true);
        }
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '_' + Date.now() + '.jpg');
    },
});

const upload = multer({ storage: storage });
router.post('/add', upload.single('photo'), function (req, res) {
    console.log('uploaded');
});



github recovery codes (20211210)
4aa9c-dd49881e19-ba25da98dd-95c1479433-e2c2142beb-1e325327c6-fef5f108b1-d405424b49-2a51556754-fc8e5a2668-ff543301b2-7afbad867d-9997cdeeac-94016b17bd-79a1ae976d-0f756702d6-a184d



francesco@debian:/tmp$ nc -l -p 8080 -o fra.txt
POST / HTTP/1.1
Host: localhost:8080
User-Agent: curl/7.64.0
Accept: */*
Content-Length: 34
Content-Type: application/x-www-form-urlencoded



 curl \
   -H "Content-Type: application/json" \
  -F "file=@fra2.txt;filename=loza.mp4;type=text/plain" \
  https://webhook.site/3d76fb20-1587-48e7-a5bf-f02865d7bfe9


DESTINATION=https://webhook.site/3d76fb20-1587-48e7-a5bf-f02865d7bfe9
FILE=@dummy.json
curl -X POST -H "Content-Type: application/json" -d $FILE $DESTINATION



function unpack(str) {
    var bytes = [];
    for(var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        bytes.push(char >>> 8);
        bytes.push(char & 0xFF);
    }
    return bytes;
}

//to lowercase (65:90)  num or 32 
String.fromCharCode(fra.charCodeAt(0) | (" ").charCodeAt(0))

//to uppercase (97:122) num and 95
String.fromCharCode(fra.charCodeAt(0) & ("_").charCodeAt(0))


bookSchema.virtual('coverImagePath').get(function() {
  if (this.coverImage != null && this.coverImageType != null) {
    return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
  }
})

var conv = function conv (s) {
    stringa=s
    stringa=stringa.toString('base64')
    return `data:text/plain;charset=utf-8;base64,${s.toString('base64')}`
}





        let d = document, [inputs, button] = [
            d.querySelectorAll('input[type="file"], \
            input[type="hidden"]'),
            d.querySelector('#submit_button')
        ]

f= d.querySelectorAll('input[type="file"])

let f = document.querySelector("form input")

https://webhook.site/#!/3d76fb20-1587-48e7-a5bf-f02865d7bfe9/68d06c69-d81a-4fc5-b4f7-eaeea35aab77/1

application/x-www-form-urlencoded (the default)
multipart/form-data
text/plain

https://github.com/WebDevSimplified/Mybrary/blob/v1.3/models/book.js
https://www.youtube.com/watch?v=Xm5MzWvklbI&t=29s
http://127.0.0.1:3000/books/



