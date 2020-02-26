<template>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="avatarImg+avatarPrefix">
        <span class="username text-muted">{{ name }}</span>
        <span class="description">{{ title }} </span>
      </div>
      <p>
        {{ content }}
      </p>
      <div class="user-images" v-if="carouselImages && carouselImages.length > 0">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="(item, i) in carouselImages" :key="i">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-share" />
            Share
          </span>
        </li>
        <li>
          <span class="link-black text-sm">
            <i class="iconfont ve-icon-like" />
            Like
          </span>
        </li>
      </ul>
    </div>
</template>
<script>
const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/h/440'
export default {
    name:'ActivityUnit',
    data() {
        return {
            avatarPrefix,
            carouselPrefix
        }
    },
    props: {
        name: String,
        title: String,
        avatarImg: String,
        content: String,
        carouselImages: Array
    }
}
</script>


<style lang="scss" scoped>
    .user-block {
        .username,
        .description {
            display: block;
            margin-left: 50px;
            padding: 2px 0;
        }

        .username{
            font-size: 16px;
            color: #000;
        }

        :after {
            clear: both;
        }

        .img-circle {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            float: left;
        }

        span {
            font-weight: 500;
            font-size: 12px;
        }
    }

    .post {
        font-size: 14px;
        border-bottom: 1px solid #d2d6de;
        margin-bottom: 15px;
        padding-bottom: 15px;
        color: #666;

        .image {
            width: 100%;
            height: 100%;
        }

        .user-images {
            padding-top: 20px;
        }
    }
    .list-inline {
        padding-left: 0;
        margin-left: -5px;
        list-style: none;
        li {
            display: inline-block;
            padding-right: 5px;
            padding-left: 5px;
            font-size: 13px;
        }

        .link-black {
            &:hover,
            &:focus {
                color: #999;
            }
        }
    }

    .box-center {
        margin: 0 auto;
        display: table;
    }

    .text-muted {
        color: #777;
    }
</style>

