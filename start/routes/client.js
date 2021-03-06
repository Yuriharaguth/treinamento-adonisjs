'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Auth Routes
 */

 Route.group(() => {

     Route.get('products', 'ProductController.index')
     Route.get('products/:id', 'ProductController.show')

     Route.get('orders', 'OrderController.index')
     Route.get('orders/:id', 'OrderController.show')
     Route.get('orders', 'OrderController.store')
     Route.get('orders', 'OrderController.put')

 })
 .prefix('v1')
 .namespace('Client')