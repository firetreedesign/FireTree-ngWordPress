angular.module('FireTree.ngWordPress', [])

/**
 * A simple example service that returns some data.
 */
.factory('ftWordPress', function( $http ) {

	var wpURL		= '<YOUR WORDPRESS URL>';
	var callback	= '_jsonp=JSON_CALLBACK';
	
	return {
		
		/**
		 * Return a Custom Post Type
		 *
		 * cpt	string	Custom post type
		 * filters	array	Array of filters. Ex. [{ filter: 'posts_per_page', value: '5' }]	
		 */
		
		getCPT: function( cpt, filters ) {
			
			// Define the endpoint
			var apiURL = wpURL + '/wp-json/posts?type=' + cpt;
			
			// Loop through the filters and add them to the endpoint
			for (var i=0; i < filters.length; i++) {
			
				apiURL += '&filter[' + filters[i].filter + ']=' + filters[i].value;
				
			}
			
			apiURL += '&' + callback;
						
			// Return the data
			return $http.jsonp( apiURL );
					
		},
		
		/**
		 * Returns the menu for a specific menu location
		 *
		 * Requires https://wordpress.org/plugins/wp-api-menus/
		 * Will rewrite for the WP REST API when this functionality is included.
		 *
		 * name	string	The name of the menu location
		 */
		
		getMenuThemeLocation: function( name ) {
		
			// Define the endpoint
			var apiURL = wpURL + '/wp-json/menu-locations/' + name + '?' + callback;
			
			// Return the data
			return $http.jsonp( apiURL );
			
		},
		
		/**
		 * Return a Post
		 *
		 * id	string	The Post ID
		 */
		
		getPost: function( id ) {
			
			// Define the endpoint
			var apiURL = wpURL + '/wp-json/posts/' + id + '?' + callback;
			
			// Return the data
			return $http.jsonp( apiURL );
			
		},
		
		/**
		 * Return a Taxonomy Term
		 *
		 * taxonomy	string	The Taxonomy to return
		 * id	string	The ID of the term to return
		 */
		
		getTerm: function( taxonomy, id ) {
			
			// Define the endpoint
			var apiURL = wpURL + '/wp-json/taxonomies/' + taxonomy + '/terms/' + id + '?' + callback;
			
			// Return the data
			return $http.jsonp( apiURL );
			
		},
		
		/**
		 * Return Taxonomy Terms
		 *
		 * taxonomy	string	The Taxonomy to return terms for
		 */
		
		getTerms: function( taxonomy ) {
			
			// Define the endpoint
			var apiURL = wpURL + '/wp-json/taxonomies/' + taxonomy + '/terms?' + callback;
			
			// Return the data
			return $http.jsonp( apiURL );
			
		}
		
	}

});