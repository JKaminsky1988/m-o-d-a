<?php
	// List of available localized versions as 'lang code' => 'url' map
	$sites = array(
	    "ru" => "/ru/",
	    "ua" => "/ua/",
	);

	// Get 2 char lang code
	$lang = $_SERVER['HTTP_CF_IPCOUNTRY'];

	// Set default language if a `$lang` version of site is not available
	if (!in_array($lang, array_keys($sites)))
	    $lang = 'ru';

	// Finally redirect to desired location
	header('Location: ' . $sites[$lang]);
?>
