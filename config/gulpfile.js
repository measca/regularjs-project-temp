var gulp = require('gulp')
var webpack = require('webpack')
var gutil = require('gulp-util')
var webpackConf = require('./webpack.config')
var clean = require('gulp-clean')
var sftp = require('gulp-sftp')

gulp.task('clean', () => {
  return gulp.src('../assets/', { read: true }).pipe(clean({ force: true }))
})

gulp.task('pack', ['clean'], (done) => {
  webpack(webpackConf, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({ colors: true }))
    done()
  })
})

gulp.task('default', ['pack'])

gulp.task('deploy', () => {
  return gulp.src('../assets/').pipe(sftp({
    host: '[remote server ip]',
    remotePath: '/www/app/',
    user: 'foo',
    pass: 'bar'
  }))
})