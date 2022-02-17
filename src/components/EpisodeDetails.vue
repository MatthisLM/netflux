<template>
    <div id="modal-episode-details" class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered w-50">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 v-if="episode" class="modal-title text-white fw-bold">{{ movieName }} Season {{episode.season}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div v-if="episode" class="col-4">
                            <img :src="episode.image.original" class="w-100">
                        </div>
                        <div v-if="episode" class="col-8 d-flex flex-column align-items-start">
                            <h3 class="modal-title text-white fw-bold">{{episode.name}}</h3>
                            <h5 class="modal-title fw-bold air-date">{{episode.airdate}}</h5>
                            <div class="text-white text-start my-4" v-html="episode.summary"></div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <Button type="button" class="btn btn-secondary mx-4" data-bs-dismiss="modal">Close</Button>
                    <Button :iconSvgPath="'m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'">Watch</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'EpisodeDetails',
  components : {
      Button
  },
  props:{
    movieName:String,
    episode:Object,
  },
}
</script>


<style scoped>
    .modal {
        background: rgb(228,216,4,0.05);
    }
    .modal-dialog {
        max-width: none;
    }
    .modal-content {
        background: #040406;
    }
    .modal-header .btn-close {
        display: contents;
        color:white;
    }
    .bi-x-lg {
        height: 25px;
        width: 25px;
    }
    .btn-close:hover {
        color: var(--secondary-color);
    }
    .air-date{
        font-size:14px;
        color:var(--secondary-color);
    }
    .modal-footer {
        border:none;
    }
</style>
