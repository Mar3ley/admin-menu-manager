import CollapsButtonTemplate from '../templates/collapse-button.html';

const CollapseButton = Backbone.View.extend({
	tagName: 'li',
	template: _.template( CollapsButtonTemplate ),
	attributes: function() {
		return {
			class: 'ui-sortable-handle',
			id: 'collapse-menu'
		};
	},

	render: function() {
		this.$el.html( this.template( AdminMenuManager.templates.collapseButton ) );
		return this;
	},

	events: {
		'click #collapse-menu': 'collapse'
	},

	collapse: function() {
		this.trigger( 'collapse' );
	}

});

export default CollapseButton;
