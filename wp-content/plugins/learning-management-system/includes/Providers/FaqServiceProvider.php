<?php
/**
 * Faq model service provider.
 */

namespace Masteriyo\Providers;

defined( 'ABSPATH' ) || exit;

use League\Container\ServiceProvider\AbstractServiceProvider;
use Masteriyo\Models\Faq;
use Masteriyo\Repository\FaqRepository;
use Masteriyo\RestApi\Controllers\Version1\FaqsController;

class FaqServiceProvider extends AbstractServiceProvider {
	/**
	 * The provided array is a way to let the container
	 * know that a service is provided by this service
	 * provider. Every service that is registered via
	 * this service provider must have an alias added
	 * to this array or it will be ignored
	 *
	 * @since 1.0.0
	 *
	 * @var array
	 */
	protected $provides = array(
		'faq',
		'faq.store',
		'faq.rest',
		'\Masteriyo\RestApi\Controllers\Version1\FaqsController',
	);

	/**
	 * This is where the magic happens, within the method you can
	 * access the container and register or retrieve anything
	 * that you need to, but remember, every alias registered
	 * within this method must be declared in the `$provides` array.
	 *
	 * @since 1.0.0
	 */
	public function register() {
		$this->getContainer()->add( 'faq.store', FaqRepository::class );

		$this->getContainer()->add( 'faq.rest', FaqsController::class )
			->addArgument( 'permission' );

		$this->getContainer()->add( '\Masteriyo\RestApi\Controllers\Version1\FaqsController' )
			->addArgument( 'permission' );

		$this->getContainer()->add( 'faq', Faq::class )
			->addArgument( 'faq.store' );
	}
}
