Feature: Visit Some Page

  As a visitor to the site,
  so that I can visit other pages,
  I want to see a header on the home page.

  Background:
    Given I am on the poker site

  @focus
  Scenario: Visitor is on home page
    Then I should see "Okay, let's play!"

# /tests/features/create-widget.feature
