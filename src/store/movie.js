import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        title: '',
        movies: [],
        loading: false,
        page : ''
    }),
    // getters: {},
    mutations: {
        //범용화된 뮤테이션
        updateState(state, payload) {
            Object.keys(payload) // 페이로드에 들어있는 키 문자열로 만드렁 반복해서 사용가능
                .forEach(key => {
                    state[key] = payload[key]
                })
        },
        pushIntoMovies(state, movies){
            state.movies.push(...movies)
            //그냥 넣어버리면 아이템의 배열전체가 나올 것
            //그래서 전개해서 풀어준다음 넣어야함 그래서 전개연산자 사용
        }
    },
    actions: {
        fetchMovies({state, commit}, pageNum){
          return new Promise(async resolve => {
              const res = await axios.get(`https://www.omdbapi.com/?apikey=5d7f3567&s=${state.title}&page=${pageNum}`)
              commit('pushIntoMovies', res.data.Search)
              resolve(res.data)
          })
        },
        async searchMovies({commit, dispatch}) {
            // state.loading = true
            //배열아이템 비워야 앞에부분 추가되지않음
            commit('updateState', {
                loading: true,
                movies: [] // 초기화
            })
            const {totalResults } = await dispatch('fetchMovies', 1)

            const pageLength = Math.ceil(totalResults / 10)

            if(pageLength > 1){
                for (let i = 2; i <= pageLength; i+= 1){
                    if( i > 4) break; // 이 부분은 필요없을 수 있음
                    await dispatch('fetchMovies', i)
                }
            }
            // .then(response => {
            //     console.log(response)
            // })
            commit('updateState', {
                loading: false
            })


        }
    }
}