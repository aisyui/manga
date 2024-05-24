<template>

	<div id="app">
		
		<div class="page">

		<div class="page-top" v-if="loc === ''">
			<hooper :settings="hooperSettings">
				<slide v-for="(n,index) of products" :key="n">
					<div v-if="loading" class="loading">
						<i class="fa-solid fa-spinner fa-spin-pulse"></i>
					</div>
					<img :src="url + dir + '/' + (index) +'.png'" @load="load" />
					<div class="page_n"><a href="/"><span class="icon-ai"></span></a> {{ n }}</div>
				</slide>
				<hooper-navigation slot="hooper-addons"></hooper-navigation>
				<hooper-pagination slot="hooper-addons"></hooper-pagination>
				<hooper-progress slot="hooper-addons"></hooper-progress>
			</hooper>
		</div>

		<div class="page-number" v-if="m.data && loc_dir !== '' && m.data.find((v) => v.id == loc_dir) !== undefined">
			<hooper :settings="hooperSettings">
				<slide v-for="(n,index) in m.data.find((v) => v.id == loc_dir).end" :key="n">
					<div v-if="loading" class="loading">
						<i class="fa-solid fa-spinner fa-spin-pulse"></i>
					</div>
					<img :src="url + 'wa/' + loc_dir + '/' + (index) +'.png'" @load="load" />
					<div class="page_n"><a href="/"><span class="icon-ai"></span></a> {{ index }}</div>
				</slide>
				<hooper-navigation slot="hooper-addons"></hooper-navigation>
				<hooper-pagination slot="hooper-addons"></hooper-pagination>
				<hooper-progress slot="hooper-addons"></hooper-progress>
			</hooper>

			<div id="comment"></div>

		</div>

		<div class="page_data">
			<table>
				<thead>
					<tr>
						<th scope="col">manga</th>
						<th scope="col">ver</th>
						<th scope="col">day</th>
						<th scope="col">cmt</th>
					</tr>
				</thead>

				<tbody v-for="i in m.data">
					<tr v-if="i.id >= 1">
						<th>
							<a :href="'/' + i.id"><img :src="'/wa/' + i.dir + '/0.png'"></a>
						</th>
						<td>{{ i.id }}</td>
						<td v-if="i.updated_at">{{ moment(i.updated_at) }}</td>
						<td v-if="i.comment">{{ i.comment }}</td>
						<td v-else>-</td>
					</tr>
				</tbody>

				<tbody v-for="i in m.data">
					<tr v-if="i.id == 0">
						<th>
							<a :href="'/' + i.id"><img :src="'/wa/' + i.dir + '/0.png'"></a>
						</th>
						<td>{{ i.id }}</td>
						<td v-if="i.updated_at">{{ moment(i.updated_at) }}</td>
						<td v-if="i.comment">{{ i.comment }}</td>
						<td v-else>-</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!--
		<div class="comment" v-if="loc === ''">
			<div class="bsky_comment_embed">
				<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:4hqjfn7m6n5hno3doamuhgef/app.bsky.feed.post/3kp5qn72s232q" data-bluesky-cid="bafyreiewdfyh6rywpkdzpmf5markqa6tavc5smc32q7cw2wpwbqik5hnfm"></blockquote>
			</div>
		</div>
		-->

		</div>
	</div>
</template>

<script>
import {
	Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';

import 'hooper/dist/hooper.css';
import axios from 'axios'
import moment from "moment";
import fs from 'fs';

var page = 21;
var loc = window.location.pathname.split('/').slice(-1)[0];
var loc_dir = window.location.pathname.split('/')[1];
//let loc = window.location.pathname.split('/').slice(0)[3];

const parameters = {}
var start = 0;
var end = 21;
var dir = "wa/0";

export default {
  name: 'App',
  components: {
			Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
					loc: window.location.pathname.split('/').slice(-1)[0],
					bsky_pds: "https://bsky.social/xrpc",
					bsky_handle: "yui.syui.ai",
					bsky_cursor: "",
					bsky_cid: "",
					bsky_json: "",
					api_url: "",
					api_json: "",
					comment_open: false,
					comment_first: "",
					loading: true,
					avatar_url: "",
					f: "",
					url_check: true,
					url: "/",
					start: 0,
					end: 21,
					dir: "wa/0",
					s_a: 0,
					s_b: 2,
					s_c: 41,
					s_d: 51,
					s_e: 60,
					m: "",
					loc_manga: new URL(window.location.href),
					loc_dir: window.location.pathname.split('/')[1],
      products: [...Array(Number(page)).keys()],
      hooperSettings: {
							itemsToShow: 1,
							centerMode: true,
						}
    };
		},
		methods: {
			moment(date) {
				return moment.utc(date).local().format("YYYY.MM.DD");
			},
			page_run(s) {
				this.loc = s;
				this.hooperSettings.initialSlide = s;
				
			},
			load() {
				this.loading = false;
			},
			axios_check(url) {
				axios.get(url)
					.then(response => { 
						this.avatar_url = url;
						this.url_check = true
					})
					.catch(error => {
						this.url_check = false;
						this.avatar_url = "/icon/ai.jpg"
					});
			}
		},
		mounted() {
			if (window.location.host === "localhost:8080") {
				this.api_url = "/api/";
			} else if (window.location.host === "192.168.11.12:8080"){
				this.api_url = "/api/";
			} else {
				if (location.protocol !== "https:") {
					location.replace("https:" + location.href.substring(location.protocol.length));
				}
				this.api_url = "https://api.syui.ai";
			}
			let url = this.api_url + "/users/2/ma?itemsPerPage=4000";
			this.loc_manga = new URL(window.location.href);
			if (this.loc_manga.searchParams.get("start") !== null) {
				this.star = this.loc_manga.url.searchParams.get("star");
			}
			if (this.loc_manga.searchParams.get("end") !== null) {
				this.end = this.loc_manga.searchParams.get("end");
				this.products = [...Array(Number(this.end)).keys()];
			}
			if (this.loc_manga.searchParams.get("dir") !== null) {
				this.dir = "wa/" + this.loc_manga.searchParams.get("dir");
			}
			axios
				.get("/json/manga.json",{ crossdomain: true })
				.then(response => (this.m = response));
			axios
				.get(url,{ crossdomain: true })
				.then(
					response => {this.api_json = response
						this.comment_first = this.api_json.data[0]
					}
				);
		}
};
</script>

<style>
body {
	margin: 0px;
}

a {
	text-decoration: none;
}

a span.icon-ai {
	color: #ddd700;
}

.page_n{text-align:center;height:50px}
.hooper-pagination{position:fixed}
.hooper-next,.hooper-prev{background-color:rgba(184,207,224,.24)}
.hooper-indicator{
	background-color:#000;
	display:none;
}

.hooper{
	height:100%;
	text-align:center;
}

.hooper-progress {
	height: 12px;
}

.hooper-progress-inner {
	background-color: #ddd700;
}

button {
	padding: 10px;
	margin: 5px;
	background-color: #fff700;
	color: #313131;
	border: solid 2px;
}

ul.hooper-track {
	padding: 0px;
}

.hooper-list img {
	width:500px;
	border: solid 3px #313131;
	margin: 20px;
}

.page {
	text-align:center;
	background-color: #f1f1f1;
	padding: 50px 0 50px 0;
}

.page a img {
	border: solid 2px #313131;
	width:100px;
	margin: auto;
	display: block;
}

.page_title {
	text-align:center;
	background-color: #313131;
	padding: 100px 0 50px 0;
}

.page_title a img {
	width:100px;
	margin: auto;
	display: block;
}

.page_title head, td, tr, th {
	padding:10px;
	background: #fff;
	border: solid 1px #fff;
}

table {
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	word-break: break-all;
}

.page_data table tbody > thead, td, tr, th {
	background: #fff;
	border: solid 1px #fff;
	padding: 15px 25px 15px 25px;
}

th.row {
	background: #313131;
	border:none;
}

footer {
	text-align: center;
	background: #313131;
	color: #fff;
	padding:50px 0 30px 0;
}

.loading {
	text-align: center;
	font-size: 30px;
	margin-top:100px;
}

span.comment-time {
	float: right;
	padding: 0 5px 0 5px;
	color: #999;
}

span.comment-time a {
	color: #999;
}

span.comment-time a:hover {
	color: rgb(16, 131, 254);
}

span.comment-handle {
	padding: 0 5px 0 5px;
	position: absolute;
}

span.comment-handle a {
	color: #313131;
}

img.comment {
	width:60px;
}

p.comment-body {
	padding: 5px 40px 15px 40px;
	border-bottom: solid 1px #eee;
}

span.comment-text {
	padding:10px;
}

button.comment_open {
	padding:20px 40px 20px 40px;
	background-color: rgba(184,207,224,.24);
	border: none;
	margin:0;
}
button.comment_open:hover {
	color: rgb(16, 131, 254);
}

.comment_open {
	text-align: center;
	width: 100%;
}

.comment_open p a {
	color: rgb(16, 131, 254);
}

.bsky_comment {
	background-color: #fff;
	width: 600px;
	margin: 0px auto;
	border: solid 1px #eee;
}

.bsky_comment_embed {
	background-color: #fff;
	width: 600px;
	margin: 0px auto;
	border: none;
}

.comment {
	background-color: #fff;
}

@media screen and (max-width:1000px) { 
	img {
		width:100%;
	}
	.bsky_comment {
		width:auto;
	}
	.bsky_comment_embed {
		width:auto;
	}
	.page_title a img {
		width:100%;
	}
	.page a img {
		width:160px;
	}
	.hooper-list img {
		border: solid 0px #fff;
		margin:20px 0 0 0;
		width:100%;
	}
	p.comment-body {
		padding: 5px;
	}
	.page_data table tbody > thead, td, tr, th {
		padding:10px;
	}
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap')

	/* color: #aba700 #fff700 #313131 rgba(184, 207, 224, .24) rgb(16, 131, 254) #ddd700 */
</style>
