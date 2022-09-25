<template>
        <div class="card" @click="onClick">
            <div class="content">
                <div class="title">
                    Period 3
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import { useUserInfoStore } from '~~/stores/teacher';

const store = useUserInfoStore()

const onClick = () =>{
    store.getClasses()
}

</script>

<style scoped lang="scss">
    .card{
        background-color:#0f2337;
        color:white;
        height:25rem;
        width:25rem;
        border-radius:40px;
        box-shadow:  0 7px 7px rgba(0, 0, 0, 0.2);
        transition: 0.3s ease-in-out;
        &:hover{
            background-color:#192c3f;
            cursor: pointer;
        }
        .content{
            .title{
                font-size: 2.2rem;
                padding: 2rem 0rem 0rem 3rem;
            }
        }
    }


</style>