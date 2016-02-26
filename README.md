# AwesoModals
Simple modal / dialog system, with all you need for basic usage. Light and customizable!

#Install

If you use Bower, you can use its install method

```bash
$ bower install jquery-awesomodals
```

Or you can just manually download the files on github.

# Use

First thing first, call the awesomodals method on a general container of your website (or directly on body).

```javascript
$('.container').awesomodals();
```

#Options
<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Valeur par défaut</th>
			<th>Valeurs possibles</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>debug</th>
			<td>false</td>
			<td>bool</td>
			<td>Allow debug messages to be shown if set to true</td>
		</tr>
		<tr>
			<th>selectorOpen</th>
			<td>'[data-modal-init]'</td>
			<td><code>data-*</code> attribute, class or any way to target an element</td>
			<td>-</td>
		</tr>
		<tr>
			<th>selectorClose</th>
			<td>'[data-modal-cose]'</td>
			<td>string: <code>data-*</code> attribute, class or any way to target an element</td>
			<td>-</td>
		</tr>
		<tr>
			<th>selectorModal</th>
			<td>'[data-modal-item]'</td>
			<td>string: <code>data-*</code> attribute, class or any way to target an element</td>
			<td>-</td>
		</tr>
		<tr>
			<th>itemOverlay</th>
			<td>'.dialog-overlay'</td>
			<td>string: any way to target an element (class, id, etc.)</td>
			<td>-</td>
		</tr>
		<tr>
			<th>classActive</th>
			<td>'dialog--active'</td>
			<td>string</td>
			<td>Class name for the active modal</td>
		</tr>
		<tr>
			<th>optionOverlayActive</th>
			<td>true</td>
			<td>bool</td>
			<td>Enable or not the clickable overlay to close the modal</td>
		</tr>
		<tr>
			<th>onModalOpened</th>
			<td>null</td>
			<td>function callback</td>
			<td>Fires after a modal is opened</td>
		</tr>
		<tr>
			<th>onModalClosed</th>
			<td>null</td>
			<td>function callback</td>
			<td>Fires after a modal is closed</td>
		</tr>
	</tbody>
</table>
