import { test, expect }
from '../fixtures/fixtures/loginFixture';

test('Dashboard Check @regression', async ({ loggedInPage }) => {


   await expect(loggedInPage)
      .toHaveURL(/dashboard/);

});