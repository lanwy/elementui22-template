<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>About me</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>Hello</div>
          {{ user.role }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
        <div class="user-role text-center text-muted">{{ user.role }}</div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><i class="iconfont ve-icon-book" /><span>Education</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            JS in Computer Science from the University of Technology
          </div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header"><i class="iconfont ve-icon-skill" /><span>Skills</span></div>
        <div class="user-bio-section-body">
          <div 
            v-for="({name, percentage, status },i) in skills" 
            :key="i" 
            class="progress-item">
            <span>{{ name }}</span>
            <el-progress :percentage="percentage" :status="status" />
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>

export default {
    name:'UserCard',
    data() {
      return {
        skills: [
          {name:'Vue', percentage: 70 },
          {name:'JavaScript', percentage: 18 },
          {name:'Css', percentage: 12 },
          {name:'ESLint', percentage: 100 , status:"success"}
        ]
      }
    },
    props: {
        user: {
            type: Object,
            default: () => {
                return {
                    name: '',
                    email: '',
                    avatar: '',
                    roles: ''
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .box-center {
        margin: 0 auto;
        display: table;
    }

    .text-muted {
        color: #777;
    }

    .user-profile {
        .user-name {
            font-weight: bold;
        }

        .box-center {
            padding-top: 10px;
        }

        .user-role {
            padding-top: 10px;
            font-weight: 400;
            font-size: 14px;
        }

        .box-social {
            padding-top: 30px;

            .el-table {
            border-top: 1px solid #dfe6ec;
            }
        }

        .user-follow {
            padding-top: 20px;
        }
        }

        .user-bio {
        margin-top: 20px;
        color: #606266;

        span {
            padding-left: 4px;
        }

        .user-bio-section {
            font-size: 14px;
            padding: 15px 0;
            .user-bio-section-header {
            border-bottom: 1px solid #dfe6ec;
            padding-bottom: 10px;
            margin-bottom: 10px;
            font-weight: bold;
            }
        }
    }
</style>
