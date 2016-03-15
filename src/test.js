import assert from 'assert'
import { printMessage, isDeprecated } from '.'
printMessage()

assert(isDeprecated('deprecated.js'), 'should be deprecated')
