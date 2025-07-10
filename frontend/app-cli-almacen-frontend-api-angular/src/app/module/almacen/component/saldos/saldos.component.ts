/*
 * @overview        {SaldosComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { SaldosViewModel } from '../../model/saldos.model';

/**
 * TODO: Description of {@code SaldosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-saldos',
    templateUrl: './saldos.component.html',
    standalone: false,
    styleUrls: ['./saldos.component.css']
})
export class SaldosComponent extends GenericComponent<SaldosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: SaldosViewModel) {
        super(entityInstance);
    }

}
