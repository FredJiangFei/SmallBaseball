import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { avatars } from '../../_utils/svg.util';

@Component({
  selector: 'app-avatar-select',
  templateUrl: './avatar-select.component.html',
  styleUrls: ['./avatar-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvatarSelectComponent),
      multi: true,
    },
  ],
})
export class AvatarSelectComponent implements ControlValueAccessor {
  avatars = avatars;
  choosedAavtar: string = '';
  writeValue(obj: any): void {
    this.choosedAavtar = obj;
  }

  selectAvatar(avatar: string) {
    this.choosedAavtar = avatar;
    this.onChange(avatar);
  }

  onChange = (avatar: string) => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
