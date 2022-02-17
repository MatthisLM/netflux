<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-white fw-bold">Comments</h2>
            </div>
            <div class="col-8">
                    <ul class="comment-list">
                        <li v-for="(comment, i) in allComments" :key="i" class="py-2">
                            <div class="d-flex w-100 justify-content-between my-2">
                                <span class="username">{{comment.comments.userName}}</span>
                                <span v-if="comment">{{comment.comments.date.slice(0, 10)}}</span>
                            </div>
                            <div class="d-flex text-white">{{comment.comments.content}}</div>
                        </li>
                    </ul>
            </div>
            <div class="col-4 d-flex">
                <form id="post-comment" class="d-flex flex-column align-items-start w-100" @submit.prevent="postComment">
                    <label class="text-white fw-bold">Username</label>
                    <input class="w-75" type="text" name="userName" required="required" placeholder="username">
                    <br>
                    <label class="text-white fw-bold">Your comment</label>
                    <textarea class="w-75" name="content" required="required" placeholder="Your comment..."></textarea>
                    <br>
                    <button class="w-25" type="submit">Post</button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Comments',
  props:{
      movieId: String
  },
  data(){
      return {
          allComments: []
      }
  },
  mounted(){
        this.updateComments();
  },
  methods: {
      postComment:function(event){   
        let axios = Axios.create({
            baseURL: 'http://localhost:3001/',
            timeout: 10 * 1000,
        });
        axios.get(`/comments?showId=${this.movieId}`).then((response)=>{
            if(response.data.length === 0){
                throw ''
            }
            let dbId = response.data.id;
            let date = new Date ();
            let userName  = event.target[0].value
            let content = event.target[1].value
            let newComment = {
                userName: userName,
                movieId: this.movieId,
                content: content,
                date: date
            }
            axios.put(`/comments/${dbId}`,{
                "comments": [...response.data.comments, newComment],
            }).then(() => {
                console.log(response.data)
                this.updateComments();
                event.target[0].value = '';
                event.target[1].value = '';
            }); 
        }).catch(()=> {
            axios.post(`/comments/`,{showId:this.movieId,comments:{}}).then((response)=>{
                let dbId = response.data.id;
                let date = new Date ();
                let userName  = event.target[0].value
                let content = event.target[1].value
                let newComment = {
                    userName: userName,
                    showId: this.movieId,
                    content: content,
                    date: date
                }
                axios.patch(`/comments/${dbId}`,{
                    "showId": response.data.showId,
                    "comments": newComment,
                    "id": dbId
                }).then(() => {
                    this.updateComments();
                    event.target[0].value = '';
                    event.target[1].value = '';
                });
            })
            
        });
      },
      updateComments:function(){
          let axios = Axios.create({
            baseURL: 'http://localhost:3001/',
            timeout: 10 * 1000,
        });
        axios.get(`/comments?showId=${this.movieId}`).then((response) => {
            console.log(response.data);
            this.allComments = response.data;
        }).catch(function (error) {
            return error
        });
      },
  }
}
</script>

<style scoped>
.container {
    padding-top: 60px;
    padding-bottom: 60px;
}
h2{
    margin-bottom:60px;
}
.comment-list{
    list-style:none;
}
.comment-list .username{
    color:var(--secondary-color)
}
.comment-list li{
    border-bottom: 1px solid #242426;
}
#post-comment label{
    margin-bottom:8px;
}
#post-comment input,
#post-comment textarea{
    min-width: 25%;
    border: none;
    background: #12151e;
    color: #fff;
    padding: 14px 20px;
    font-size: 12px;
    border-radius: 30px;
    box-shadow: inset 0px 4px 9px 0px rgb(0 0 0 / 25%);
}
#post-comment{
    position: sticky;
    top:0;
}
#post-comment textarea{
    min-height:200px;
    max-height:400px;
}
#post-comment button{
    font-family:'Poppins', sans-serif;
    font-weight: bold;
    color: white;
    border: 2px solid var(--secondary-color);
    border-radius:30px;
    background: #12151e;
    padding: 8px 16px;
}
#post-comment button:hover{
    background: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    color: #1e1b29
}
</style>